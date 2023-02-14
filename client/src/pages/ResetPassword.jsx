import CustomButton from "../components/CustomButton"
import CustomInput from "../components/CustomInput"
import CustomLabel from "../components/CustomLabel"

function ResetPassword() {
    return (
        <>
                            <h1 className="text-xl font-bold text-center leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                                Enter New Password
                            </h1>
                            <form className="space-y-4 md:space-y-6">
                                <div>
                                    <CustomLabel for="password" label="New Password" />
                                    <CustomInput type="password" name="password" placeholder="**********" />
                                </div>
                                <div>
                                    <CustomLabel for="password" label="Confirm Password" />
                                    <CustomInput type="password" name="password" placeholder="**********" />
                                </div>
                                <CustomButton type="submit" content="Reset Password" />
                            </form>
        </>
    )
}

export default ResetPassword