let isVerified=false
let isLoggedIn=true
let HasPaymentToken=true
let isGuest=true
if (!isVerified&&isLoggedIn&&HasPaymentToken) {
    console.log("Greeting Message To User")
    console.log("Grant Access To Paid Course")
}else if (isVerified || isGuest) {
    console.log("Allow free previews")
    
} else {
    console.log("Please Contact Admin")

}