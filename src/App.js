import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>
      <header className='shadow py-2'>
        <h4 className='ps-4'>Company name</h4>
        <ul>
          <li><a href="#">Features</a></li>
          <li><a href="#">Enterprise</a></li>
          <li><a href="#">Support</a></li>
          <li><a href="#">Pricing</a></li>
          <li><button type="button" class="btn btn-outline-primary">Sing up</button></li>
        </ul>
      </header>
      <br />
      <section className='text'>
        <h1>Pricing</h1>
        <p>Quickly build an effective pricing table for your potential customers with  this <br />
          Bootstrap example. It's built with default Bootstrap components and utilities with <br /> little customization.

        </p>
      </section>
      <section className='section'>
        <div class="container text-center">
          <div class="row g-2">
            <div class="col col-4 shadow">
              <div class="p-3"><h2>Free</h2>
                <p className='p'>__________________________________</p>
                <h1>$0 / mo</h1>
                <p>10 users included <br />
                  2 GB of storage <br />
                  Email support <br />
                  Help center access</p>
                <button class="btn btn-outline-primary">Sing up for Free</button>
              </div>
              &nbsp;
            </div>
            <div class="col col-4 shadow">
              <div class="p-3"><h2>Pro</h2>
                <p className='p'>__________________________________</p>

                <h1>$15 / mo
                </h1>
                <p>20 users included <br />
                  10 GB of storage <br />
                  Priority email support <br />
                  Help center access</p>
                <button class="btn btn-primary">Get started</button>
              </div>
            </div>

            <div class="col col-4 shadow">
              <div class="p-3"><h2>Enterprise</h2>
                <p className='p'>__________________________________</p>

                <h1>$29 / mo
                </h1>
                <p>30 users included <br />
                  15 GB of storage <br />
                  Phone and email support <br />
                  Help center access</p>
                <button class="btn btn-primary">Contact us</button></div>
            </div>
          </div>
        </div>
      </section>
      <br /><br /><br />
      <section className='main'>
        <p className='p'>________________________________________________________________________________________________________________</p>
        <div className="container">
          <img src="https://getbootstrap.com/docs/4.0/assets/brand/bootstrap-solid.svg" alt="" />
          <p className='o'>© 2017-2018</p>
          <div className="ul">
          <ul>
            <li><h4>Features</h4></li>
            <li>Cool stuff</li>
            <li>Random feature</li>
            <li>Team feature</li>
            <li>Stuff for developers</li>
            <li>Another one</li>
            <li>Last time</li>
          </ul>
          <ul>
            <li><h4>Resources</h4></li>
            <li>Resource</li>
             <li>Resource name</li>
            <li>Another resource</li>
            <li>Final resource</li>

          </ul>
          <ul>
            <li><h4>About</h4></li>
            <li>Team</li>
            <li>Locations</li>
            <li>Privacy</li>
            <li>Terms</li>

          </ul>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
