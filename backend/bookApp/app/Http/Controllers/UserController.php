<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Contracts\View\Factory;
use Illuminate\Contracts\View\View;
use Illuminate\Http\JsonResponse;

class UserController extends Controller
{
    public function listUsers(): Factory|View
    {
        $users = User::all(); // Get all users
        return view(view: 'user.userview', data: ['users' => $users]); // Pass users to the view
    }

    public function deleteUser($id): JsonResponse
    {
        $user = User::find(id: $id);
        if (!$user) {
            return response()->json(data: ['message' => 'User not found'], status: 404);
        }
        $user->delete(); // Delete the user
        return response()->json(data: ['message' => 'User deleted successfully'], status: 200);
    }


    public function edit($id): Factory|JsonResponse|View
    {
        $user = User::find($id);  // Find the user, returns null if not found

        // Check if the user exists
        if (!$user) {
            return response()->json(data: ['message' => 'User not found'], status: 404);  // Return 404 if user is not found
        }

        return view(view: 'user.edit', data: compact(var_name: 'user'));  // Pass the user data to the view
    }
}
