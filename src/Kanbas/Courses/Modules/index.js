import ModuleList from "./ModuleList";
import { View } from 'react-native';

function Modules() {
  return (
    <div className="row">
      <div className="col-9 home-right-div">
        <h2>Modules</h2>
        <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
          <button class="btn btn-secondary">Collapse All</button>
          <button class="btn btn-secondary">View Progress</button>
          <select>
            <option value="Publish All">Publish All</option>
            <option value="Unpublish All">Unpublish All</option>
            <option value="Refresh">Refresh</option>
          </select>
          <button class="btn btn-danger">Module</button>
        </View>
        <ModuleList />
      </div>
    </div>
  );
}
export default Modules;