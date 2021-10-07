const End = ({result, total}) => {
    return(
        <div>
            <p  className="h2 font-weight-bold">Thank you for your participation</p>
            <br/>
            <p  className="h2 font-weight-bold">Your result is : {result}/{total} </p>
            <a href="/patient"> Back to home page </a>
        </div>

    )
}

export default End