import './App.css';
import './css/index.css';
import Layout from './components/layout'

function App() {

    return (
        <Layout>
            <body>
            <section id="contentHolder">
                <div id="sliderContainer">
                    <div className="imageSlider">
                        <img src={require("./images/0-5000x3333.jpg")} alt="Placeholder laptop"/>
                        <img src={require("./images/20-3670x2462.jpg")} alt="Placeholder study area"/>
                    </div>
                </div>
                <section className="content">
                    <h3>Summary:</h3>
                    <p>Dedicated and detail-oriented computer science student with zero years of experience in the
                        development industry.</p>
                </section>
                <section id="experience">
                    <h3 className="content">Experience:</h3>
                    <div className="content">
                        <h4>Lorem ipsum (2021 - 2023) </h4>
                        <p>Dis faucibus arcu enim cursus; tempus augue montes in. Metus sociosqu condimentum magna quis
                            parturient. Tristique enim hac aptent porttitor; metus mollis. Integer gravida facilisi
                            scelerisque; leo dolor nisi ad efficitur. Sociosqu efficitur commodo lacinia velit
                            vestibulum, hac mi integer. Dictum aliquam suscipit tellus orci odio amet fermentum. Vel
                            nulla ornare quis pharetra mi inceptos est eleifend. Convallis mus tempus arcu hac
                            sollicitudin est imperdiet convallis convallis.
                        </p>
                    </div>
                    <div className="content">
                        <h4>Feugiat platea (2023-present)</h4>
                        <p>Ullamcorper nulla praesent luctus mus scelerisque facilisis. Dignissim interdum himenaeos
                            senectus bibendum feugiat aliquam aliquet tortor. Lectus sit ultricies enim augue
                            dapibus sagittis ac. Rutrum interdum enim elementum platea sem, euismod nibh tempus.
                            Fringilla curae id non fames gravida consectetur pulvinar id. Tortor curae mi enim
                            egestas ac metus. Nec ultricies justo in tempor aliquam pellentesque. Elementum nunc ac eros
                            commodo lectus ante vehicula. Consequat condimentum enim nostra aenean vitae dolor.
                        </p>
                    </div>
                </section>
            </section>
            </body>
        </Layout>
    );
}

export default App;
