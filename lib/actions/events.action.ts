'use server'

export async function postEvent(prevState, formData) {
    const title = formData.get('title')
    const tags = formData.get('tags')
    const img = formData.get('img')
    const location = formData.get('location')
    const description = formData.get('description')
    const date = formData.get('date')
    const time = formData.get('time')

    try {

        // //find if user exists
        // const eventTime = await prisma.eve.findUnique({
        //     where: {
        //         username: username,
        //     }
        // })

        // //if user exists, return error
        // if (eventTime) {
        //     return {
        //         error: true,
        //         message: "Username already exists"
        //     }
        // }

        // //if user does not exist, create user
        // await prisma.user.create({
        //     data: {
        //         username: username,
        //         name: name,
        //         email: email,
        //         password: password
        //     },
        // })

    } catch (err) {
        return {
            error: true,
            message: "Something went wrong."
        }
    }
}