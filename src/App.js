import './App.css';
import { ColorPalette } from './assets/ColorPalette';
import { Fonts } from './assets/Fonts';
import { MSText } from './components';

function App() {
  return (
    <div style={{ backgroundColor: ColorPalette.bgColor }}>
      <MSText font={Fonts.MerriweatherItalic50} style={{ color: ColorPalette.primary300 }}>İstediğim yazı</MSText>
    </div>
  );
}

export default App;
