import videoHomePage from '../../asset/video-homepage.mp4'

const HomePage = () => {
    return (
        <div className="homepage-container">
            <video autoPlay muted loop>
                <source
                    src={videoHomePage}
                    type='video/mp4' />
            </video>
            <div className='homepage-content'>
                <div className='title-1'>There's a better way to ask</div>
                <div className='title-2'>Get more data like signups, feedback, and anything else with forms designed to be refreshingly different. Get more data like signups, feedback</div>
                <div>
                    <button className='title-3'>Get started. It's Free</button>
                </div>
            </div>
        </div>
    )
}

export default HomePage