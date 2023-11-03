import ModuleList from "../Modules/ModuleList";
import {View} from 'react-native';
import "./index.css";


function Home() {
  return (
    <div className="row">
        <div className="col-8 home-right-div">
            <h2>Home</h2>
            <View style={{flexDirection: 'row', justifyContent: 'flex-end'}}>
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
        <div className="col-4">
            <h2>Course Status</h2>
            <div className="home-right-div">
                <button class="btn btn-secondary"><i class="fa fa-ban" aria-hidden="true"></i>Unpublish</button>
                <button class="btn btn-success"><i class="fa fa-check-circle" aria-hidden="true"></i>Published</button>
                <div>
                  <ul className="home-ul">
                    <li><a href="#" class="btn btn-secondary"><i class="fa fa-file-code-o" aria-hidden="true"></i>Import Existing Content</a></li>
                    <li><a href="#" class="btn btn-secondary"><i class="fa fa-mars-stroke" aria-hidden="true"></i>Import From Commons</a></li>
                    <li><a href="#" class="btn btn-secondary"><i class="fa fa-life-ring" aria-hidden="true"></i>Choose Home Page</a></li>
                    <li><a href="#" class="btn btn-secondary"><i class="fa fa-bar-chart" aria-hidden="true"></i>View Course Stream</a></li>
                    <li><a href="#" class="btn btn-secondary"><i class="fa fa-bullhorn" aria-hidden="true"></i>New Announcement</a></li>
                    <li><a href="#" class="btn btn-secondary"><i class="fa fa-bar-chart" aria-hidden="true"></i>New Analytics</a></li>
                    <li><a href="#" class="btn btn-secondary"><i class="fa fa-bell-o" aria-hidden="true"></i>View Course Notifications</a></li>
                  </ul>
                </div>
              </div>
              <h2>Comming Up</h2>
              <div>
                <a href="#">View Calendar</a>
                <ul className="home-ul">
                  <li>
                    <a href="#">Lecture CS4550.12631.202410 Sep 7 at 11:45am</a>
                  </li>
                  <li>
                    <a href="#">Lecture CS4550.12631.202410 Sep 11 at 11:45am</a>
                  </li>
                  <li><a href="#">CS5610 06 SP23 Lecture Sep 11 at 6pm</a></li>
                </ul>
              </div>
        </div>
    </div>
  );
}
export default Home;