import './App.scss'
import Images from './assets/images';

function App() {

    console.log({ Images })
    return (
        <div className="App">
            <div className="Home">
            
                <div className="Sidebar">

                    <div className='logo'>
                        <img src={Images.logo} alt="logo" />
                        <span>MentorZ</span>
                    </div>

                </div>

                <div className='Wapper'>
                    <div className="Topbar"></div>
                    <div className='Content'>
                        <div className="Main"></div>
                        <div className="Rightbar"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default App;