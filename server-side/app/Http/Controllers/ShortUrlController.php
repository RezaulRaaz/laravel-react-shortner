<?php

namespace App\Http\Controllers;

use App\Models\UrlClickCount;
use App\Models\UrlShort;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use PharIo\Manifest\Url;

class ShortUrlController extends Controller
{

    public function short_url_list($user_id){
       $list = UrlShort::where('user_id',$user_id)->get();
       return response()->json(['list'=>$list],200);
    }

    public function create_short_url(Request $request){

        $url=UrlShort::where('user_id',$request->user_id)->where('url',$request->url)->first();
        $shortUrl = $this->generateShortUrl();

        if($url==null){
            $newUrl=UrlShort::create([
                'user_id'=>$request->user_id,
                'url'=>$request->url,
                'short_url'=>$shortUrl,
                'click_limit'=>$request->click_limit,
                'ip_block_time'=>$request->ip_block_time,
                'per_minute_click_count'=>$request->per_minute_click_limit,
            ]);

            if($newUrl){
                UrlClickCount::create([
                    'url_short_id'=>$newUrl->id,
                    'ip'=>$request->ip_address,
                ]);
            }
            return response()->json(['success'=>$url]);
        }else{
            return response()->json(['success'=>$url]);
        }
    }

    public function generateShortUrl(){
        // random string Generate in six latter
        $result = substr(str_shuffle("0123456789abcdefghijklmnopqrstvwxyz"), 0, 6);
        $data=UrlShort::where('short_url',$result)->first();
        if($data !=null){
            $this->generateShortUrl();
        }
        return $result;
    }
}
