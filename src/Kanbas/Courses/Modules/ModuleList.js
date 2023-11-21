import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import db from "../../Database";
import { View } from 'react-native';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { AiOutlineCaretRight } from 'react-icons/ai';
import { Message, Icon, Button } from 'semantic-ui-react';
import * as client from "./client";

function ModuleList() {
  const { courseId } = useParams();
  const [modules, setModules] = useState([]);
  const [module, setModule] = useState({});

  const addModule = async () => {
    const newModule = await client.addModule(courseId, module);
    setModule(newModule);
    setModules([newModule, ...modules]);
  };

  const updateModule = async () => {
    const newModule = await client.updateModule(module._id, module);
    setModule(newModule);
    const modules = await client.findModulesForCourse(courseId);
    setModules(modules);
  };

  const fetchModules = async () => {
    const modules = await client.findModulesForCourse(courseId);
    setModules(modules);
  };

  const deleteModule = async (id) => {
    try {
      await client.deleteModule(id);
      const modules = await client.findModulesForCourse(courseId);
      setModules(modules);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchModules();
  }, []);

  return (
    <ul className="list-group">
      <li className="list-group-item">
        <input style={{ width: 255 }}
          value={module.name}
          onChange={(e) =>
            setModule({ ...module, name: e.target.value })
          }
        />
        <br />
        <textarea style={{ width: 255 }}
          value={module.description}
          onChange={(e) =>
            setModule({ ...module, description: e.target.value })
          }
        />
        <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
          <button className="btn btn-primary" onClick={updateModule}>Update</button>
          <button className="btn btn-success"
            onClick={addModule}
          >
            Add
          </button>
        </View>


      </li>

      {modules
        .filter((module) => module.course === courseId)
        .map((module, index) => (
          <li key={index} className="list-group-item">

            <div >
              <Message className="d-flex align-items-center">
                <div className="d-flex">
                  <BsThreeDotsVertical className='btn-icon' />
                  <AiOutlineCaretRight className='btn-icon'/>
                </div>

                <div style={{width: 3000}}>
                  <h4>{module.name}</h4>
                  <p>{module.description}</p>
                </div>
                <div className="d-flex justify-content-end">
                <button className="btn btn-danger" onClick={() => deleteModule(module._id)}>
                    Delete
                  </button>
                  <button className="btn btn-success" onClick={() => setModule(module)}>Edit</button>
                </div>
              </Message>
            </div>
            {false && module.lessons && (
              <ul className="list-group">
                {module.lessons.map((lesson, index) => (
                  <li key={index} className="list-group-item">
                    <h4>{lesson.name}</h4>
                    <p>{lesson.description}</p>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
    </ul>
  );
}
export default ModuleList;
