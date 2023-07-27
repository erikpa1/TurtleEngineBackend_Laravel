<?php

use Illuminate\Support\Facades\Route;

use Illuminate\Support\Facades\DB;
use Illuminate\SUpport\Str;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Symfony\Component\ErrorHandler\Debug;

Route::get('/projects/list-projects', function () {

    $data = array();

    $projects = DB::table('Projects')->get();


    foreach ($projects as $project) {
        $element = [
            "uid" => $project->Uid,
            "name" => $project->Name,
            "description" => $project->Description,
            "author" => $project->Author,
            "project_type" => $project->Type,
            "lat_lon" => $project->LatLon,
        ];
        array_push($data, $element);
    }

    return response()->json($data);
});


Route::post('/projects/create-project', function (Request $request) {

    Log::info($request);

    $uuid = (string)Str::uuid();
    $name = $request->query('name');
    $author =  $request->query('author');
    $description =  $request->query('description');
    $project_type = $request->query('project_type');
    $lat_lon =  $request->query('lat_lon');

    $data = [
        'Uid' => $uuid,
        'Name' => $name,
        'Description' => $description,
        'Author' => $author,
        'Type' => $project_type,
        'LatLon' => $lat_lon,
    ];


    Log::info($data);


    DB::table('Projects')->insert($data);

    return "";
});
