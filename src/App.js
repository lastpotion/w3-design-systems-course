import './App.css';
import Button from './lib/components/Button/Button';
import Card from './lib/components/Card/Card';

function App() {
  return (
    <section className="App">
      <div style={{
        padding: '1rem',
      }}>
        <h1>Component playground</h1>
        <section>
          <h3>Button</h3>
          <div className='component-block'>
            <Button theme="primary" size="small">Primary sm</Button>
            <Button theme="primary">Primary</Button>
            <Button theme="primary" size="large">Primary large</Button>
          </div>
          <div className='component-block'>
            <Button theme="secondary" size="small">Secondary small</Button>
            <Button theme="secondary">Secondary</Button>
            <Button theme="secondary" size="large">Secondary large</Button>
          </div>
          <div className='component-block'>
            <Button theme="transparent" size="small">Transparent small</Button>
            <Button theme="transparent">Transparent</Button>
            <Button theme="transparent" size="large">Transparent large</Button>
          </div>
          <div className='component-block'>
            <Button theme="danger" size="small">Danger small</Button>
            <Button theme="danger">Danger</Button>
            <Button theme="danger" size="large">Danger large</Button>
          </div>
        </section>

        <section>
          <h3>Card</h3>
          <div className='component-block'>
            <Card
              avatar={<img src="https://play-lh.googleusercontent.com/ELLR6rcIP_mr6pB4kX9QhBKF-najkWHfb8RqceX4CBsyel3o_W9DoGas7WfPgfiIsQ" alt="Hbo" />}
              username={<span><strong>HBO</strong> @HBO</span>}
              body={<p>Patiently waiting for March 26. <a href="#">#succession</a></p>}
              image={<img src="https://productplacementblog.com/wp-content/uploads/2021/11/Apple-iPad-Pro-Tablet-of-Jeremy-Strong-as-Kendall-Roy-in-Succession-S03E07-Too-Much-Birthday-2021.jpg" alt="description" />}
              actions={[
                <Button theme="transparent" size="small">Reply</Button>,
                <Button theme="transparent" size="small">Retweet</Button>,
                <Button theme="transparent" size="small">Like</Button>,
                <Button theme="transparent" size="small">Share</Button>,
              ]}
            />
          </div>
          <div className='component-block'>
            <Card
              layout="instagram"
              body={<p>This is the body of the card.</p>}
              image={<img src="https://productplacementblog.com/wp-content/uploads/2021/11/Apple-iPad-Pro-Tablet-of-Jeremy-Strong-as-Kendall-Roy-in-Succession-S03E07-Too-Much-Birthday-2021.jpg" alt="description" />}
              actions={[
                <Button theme="transparent" size="small">Like</Button>,
                <Button theme="transparent" size="small">Share</Button>,
                <Button theme="transparent" size="small">Comment</Button>,
              ]}
              />
          </div>
        </section>
      </div>
    </section>
  );
}

export default App;
