import './App.css';
import Button from './lib/components/Button/Button';

function App() {
  return (
    <section className="App">
      <div style={{
        padding: '1rem',
      }}>
        <h2>Component playground</h2>
        <div style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '1rem',
          padding: '12px'
        }}>
          <Button theme="primary" size="small">Primary sm</Button>
          <Button theme="primary">Primary</Button>
          <Button theme="primary" size="large">Primary large</Button>
        </div>
        <div style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '1rem',
          padding: '12px'
        }}>
          <Button theme="secondary" size="small">Secondary small</Button>
          <Button theme="secondary">Secondary</Button>
          <Button theme="secondary" size="large">Secondary large</Button>
        </div>
        <div style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '1rem',
          padding: '12px'
        }}>
          <Button theme="transparent" size="small">Transparent small</Button>
          <Button theme="transparent">Transparent</Button>
          <Button theme="transparent" size="large">Transparent large</Button>
        </div>
        <div style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '1rem',
          padding: '12px'
        }}>
          <Button theme="danger" size="small">Danger small</Button>
          <Button theme="danger">Danger</Button>
          <Button theme="danger" size="large">Danger large</Button>
        </div>
      </div>
    </section>
  );
}

export default App;
