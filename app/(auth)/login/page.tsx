import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import Link from 'next/link'
import LoginForm from '@/components/LoginForm'

const Login = () => {
    return (
        <MaxWidthWrapper className='min-h-screen'>
            <div className="flex flex-col py-24 items-center gap-7 my-auto">
                <h2 className='text-2xl font-semibold'>Sign in to your account</h2>
                <LoginForm/>
                <Link href='/register' className='hover:underline'>No account?</Link>
            </div>
        </MaxWidthWrapper>
    )
}

export default Login