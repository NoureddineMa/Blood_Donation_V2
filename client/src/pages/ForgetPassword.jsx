import CustomButton from "../components/CustomButton"
import CustomInput from "../components/CustomInput"
import CustomLabel from "../components/CustomLabel"

function ForgetPassword() {
    return (
        <>
                            <form className="space-y-4 md:space-y-6">
                            <h1 className="text-xl font-bold text-center leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                                Forget Password
                            </h1>
                                <div>
                                    <CustomLabel for="Email" label="Your Email" />
                                    <CustomInput type="Email" name="email" placeholder="enter your email to reset your password" />
                                </div>
                                <CustomButton type="submit" content="Send" />
                            </form>
        </>
    )
}
export default ForgetPassword