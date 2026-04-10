import { NextResponse } from "next/server"

export const POST = async (req, res) => {
    // collect data sent from the front -end
    // and convert to object
    const { username, email, password } = await req.json()
    console.log(username, email, password)

    return NextResponse.json({
        message: "Data received successfully",
        data: {
            username,
            email,
            password
        }

    }, { status: 200 })


}