import React, { useState } from "react";
import { useParams } from "react-router-dom";
import db from "../../Database";
import { useSelector, useDispatch } from "react-redux";
import {
  addModule,
  deleteModule,
  updateModule,
  setModule,
} from "./modulesReducer";
import { View } from 'react-native';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { AiOutlineCaretRight } from 'react-icons/ai';
import { Message, Icon, Button } from 'semantic-ui-react'

function ModuleList() {
  const { courseId } = useParams();
  const modules = useSelector((state) => state.modulesReducer.modules);
  const module = useSelector((state) => state.modulesReducer.module);
  const dispatch = useDispatch();

  return (
    <ul className="list-group">
      <li className="list-group-item">
        <input style={{ width: 255 }}
          value={module.name}
          onChange={(e) =>
            dispatch(setModule({ ...module, name: e.target.value }))
          }
        />
        <br />
        <textarea style={{ width: 255 }}
          value={module.description}
          onChange={(e) =>
            dispatch(setModule({ ...module, description: e.target.value }))
          }
        />
        <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
          <button className="btn btn-primary" onClick={() => dispatch(updateModule(module))}>Update</button>
          <button className="btn btn-success"
            onClick={() => dispatch(addModule({ ...module, course: courseId }))}
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
                  <button className="btn btn-danger" onClick={() => dispatch(deleteModule(module._id))}>
                    Delete
                  </button>
                  <button className="btn btn-success" onClick={() => dispatch(setModule(module))}>Edit</button>
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
