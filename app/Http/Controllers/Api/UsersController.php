<?php

namespace App\Http\Controllers\Api;

use App\User;
use App\Http\Resources\UserResource;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class UsersController extends Controller
{
    public function index()
    {
        return UserResource::collection(User::paginate(10));
    }

    public function show(User $user)
    {
        return new UserResource($user);
    }
    public function update(User $user, Request $request){
        $user->update($request->all());
       return new UserResource($user);


    }
    public function destroy(User $user){
        $user->delete();
        return response(null,204);
    }
    public function store(Request $request)
    {
        $data = $request->all();

        return new UserResource(User::create([
            'name' => $data['name'],
            'email' => $data['email'],
            'password' => bcrypt($data['password']),
        ]));
    }
}
