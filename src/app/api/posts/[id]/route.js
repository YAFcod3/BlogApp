import { NextResponse } from "next/server"
import connect from "@/utils/db"
import Post from "@/models/Post"

export  const GET = async(request ,{params})=>{

  //fetch
const {id}=params
  try {

    await connect()

    const post = await Post.findById(id)
    console.log(post)
    
    return new NextResponse(JSON.stringify(post),{status:200})
  } catch (error) {
    return new NextResponse('DataBase error',{status:500})

    
  }

}