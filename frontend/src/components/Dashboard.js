import React, { useEffect, useState } from 'react'
import AuthUser from './AuthUser';

function Dashboard() {
  const { http, getUser } = AuthUser();
  const [url, setUrl] = useState();
  const [clickLimit, setClickLimit] = useState();
  const [perMinuteLimit, setPerMinuteClickLimit] = useState();
  const [ipBlockTime, setIPBlockTime] = useState();
  const [shortUrlList, setShortUrlList] = useState([]);

  const submitForm = () => {
    var IP = sessionStorage.getItem('ip');
    http.post('/create_short_url', {
      'url': url,
      'click_limit': clickLimit,
      'per_minute_click_limit': perMinuteLimit,
      'ip_block_time': ipBlockTime,
      'ip_address': IP,
      'user_id': getUser().id,
    }).then((res) => {
      console.log(res.data);
    })
  }

  const getUserShortList = () => {
    http.get('/short_url_list/' + getUser().id).then((res) => {
      setShortUrlList(res.data.list);
      console.log(shortUrlList);
    })
  }

  useEffect(() => {
    getUserShortList()
  },[])

  return (
    <div className='my-5'>
      <div className='row'>
        <div className='col-lg-4'>
          <div className="form-group">
            <label>Url</label>
            <input type="text" required onChange={e => setUrl(e.target.value)} className="form-control" placeholder="Enter Url" />
          </div>
        </div>
        <div className='col-lg-2'>
          <div className="form-group">
            <label>Click limit(optional)</label>
            <input type="number" onChange={e => setClickLimit(e.target.value)} className="form-control" placeholder="limit" />
          </div>
        </div>
        <div className='col-lg-3'>
          <div className="form-group">
            <label>Per minute click limit(optional)</label>
            <input type="number" onChange={e => setPerMinuteClickLimit(e.target.value)} className="form-control" placeholder="limit" />
          </div>
        </div>
        <div className='col-lg-3'>
          <div className="form-group">
            <label>Enter minute for ip block(optional) </label>
            <input type="number" onChange={e => setIPBlockTime(e.target.value)} className="form-control" placeholder="eg:10" />
          </div>
        </div>
        <div className='col-lg-3 mb-3'>
          <button type="button" onClick={submitForm} className="btn btn-primary">Create</button>
        </div>
      </div>
      <table className="table">
        <thead className="thead-dark">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Url</th>
            <th scope="col">Short Url</th>
            <th scope="col">Click Count</th>
            <th scope="col">Per Minute Click</th>
            <th scope="col">Ip</th>
          </tr>
        </thead>
        <tbody>

        </tbody>
      </table>
    </div>
  )
}

export default Dashboard