export default function Button() {
    return(
        <>
            <div className= "m-auto text-center">
                <a href="/register" className="inline-flex items-center px-3 py-2  text-xl  text-center text-black bg-[#C2E799] rounded-lg hover:bg-[#83CE71] hover:text-white hover:text-bold focus:ring-4 focus:outline-none focus:ring-blue-300 ">
                    REGISTER NOW!
                    <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                    </svg>
                </a>
            </div>
        </>
    );
}