import './App.css';
import { SimpleForm } from './forms/demo1/SimpleForm';
import { SimpleFormWithRHF } from './forms/demo1/SimpleFormWithRHF';
import { SimpleFormWithRHFAndZOD } from './forms/demo2/SimpleFormWithRHFAndZOD';
import { FancyForm } from './forms/demo3/FancyForm';

export default function App() {
  return (
    <div>
      {/* DEMO 1 */}
      <SimpleForm />
      {/* <SimpleFormWithRHF /> */}
      {/* DEMO 2 */}
      {/* <SimpleFormWithRHFAndZOD /> */}
      {/* DEMO 3 */}
      {/* <FancyForm /> */}
    </div>
  );
}
