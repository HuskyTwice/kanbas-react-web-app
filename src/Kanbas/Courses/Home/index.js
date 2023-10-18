import ModuleList from "../Modules/ModuleList";
import Status from "./Status";

function Home() {
    return (
        <div className="d-flex flex-row">
            <ModuleList/>
            <Status/>
        </div>
    );
}

export default Home;