import { useRouter } from 'next/router'

export default function UserName() {
    const router: any = useRouter()
    console.log("router :", router)
    return (
        <>
            <div>This is dynamic page </div>
            <h6>my name is {router.query.username}</h6>
            <span>the path is {router.pathname}</span>
        </>
    )
}
