//import { Sandpack } from "@codesandbox/sandpack-react";
import {
  SandpackProvider,
  SandpackLayout,
  SandpackTests,
  SandpackCodeEditor,
  SandpackConsole,
} from "@codesandbox/sandpack-react";

function App() {
  //return <Sandpack />;
  return (
    <SandpackProvider>
      <SandpackLayout>
        <SandpackCodeEditor showLineNumbers showTabs />
        <SandpackTests />
        <SandpackConsole resetOnPreviewRestart="true" />
      </SandpackLayout>
    </SandpackProvider>
  );
}

export default App;
