import { NextResponse } from "next/server";
import prisma from "@/utils/connect";

//SINGLE POST

export const GET = async (req, { params }) => {
  const { slug } = params;
  try {
    const post = await prisma.post.findUnique({
      where: { slug },
      include: { user: true },
    });

    return new NextResponse(JSON.stringify(post, { status: 200 }));
  } catch (error) {
    console.log(error);

    return new NextResponse(
      JSON.stringify({ message: "something went wrong" }, { status: 500 })
    );
  }
};
