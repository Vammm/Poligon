<?php

namespace App\Http\Controllers;

use App\Http\Resources\Auth\userLogin;
use Illuminate\Http\Request;

class UserAuth extends Controller
{
    function login(Request $request){
        $error=array();
        if($request->email == ''){
            $error['email']='error';
        }
        if($request->email != 'Vam'){
            $error['auth']='Fail auth';
        }
        if($request->password == ''){
            $error['password']='error';
        }
        if($request->password != '1234'){
            $error['auth']='Fail auth';
        }
        if(count($error)>0){
            return response()->json($error,400);
        }
        return response()->json(['auth'=>'true'],200);
    }
}
