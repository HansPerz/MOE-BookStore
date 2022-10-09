
import React, { useState , useEffect } from 'react';
import {
    MDBIcon
  } from 'mdb-react-ui-kit';
  import { CKEditor } from '@ckeditor/ckeditor5-react';
  import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
  import '../../admin_css.css';
  import Navbar from "./adminNav";
  import "../APIUrl";

function Announcements() {
    const [str_NewsBody, setNewsBody] = useState("");

    return (
        <div>
            <div class="dashboard-main-wrapper">
                <Navbar/>
                <div class="dashboard-wrapper">
                <div class="container" style={{paddingTop:'3%',paddingLeft:'2%', width:'98%'}}>
                    <h2 className="text-uppercase  d-letter-spacing fw-bold d_font_family" style={{color:'black' }}><i class="bi bi-house-door-fill"></i> Dashboard</h2>
                    <h5 className="text-dark" style={{fontWeight:'100' ,  lineHeight:'0'}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Announcements Managing</h5>

                    <hr/>
                    <div className="text-right mt-4">
                        <button type="button"  style={{ letterSpacing:'1px'}}   className='btn btn-sm btn-dark shadow-0 btn-sm'  data-toggle="modal" data-target="#addDivisionalStaff">Add an Announcement</button>
                    </div>
                    <div class="modal fade" id="addDivisionalStaff" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog modal-xl" role="document">
                        <div class="modal-content ">
                        <div class="modal-header bg-dark">
                            <h3 class="modal-title text-white" id="exampleModalLabel">Add New Staff</h3>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body  pt-4 pr-4 pl-4">
                          <div class="form-group">
                            <label >Title</label>
                            <input type="text" class="form-control" id="title" />
                          </div>
                          <div class="form-group">
                                <label  class="form-label">Body</label>
                                <CKEditor
                                editor={ ClassicEditor }
                                data=""
                                onChange={(event, editor) =>{
                                const data = editor.getData();
                                setNewsBody(data);
                                }}
                            />
                          </div>
                          
                        </div>
                        <div class="modal-footer border-0">
                            <button type="button" class="btn btn-dark" data-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-success">POST</button>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div class="row mt-4">
                        <div class="col-sm-4">
                            <div class="card">
                            <div class="card-body">
                                <h5 class="card-title">Title</h5>
                                <p class="card-text">With supporting text below as a natural lead-in to additional content. With supporting text below as a natural lead-in to additional content.</p>
                                <div className="row">
                                    <div className="col pt-2">
                                        <span >Date : 2022-08-20</span><br/><br/>
                                    </div>
                                    <div className="col">
                                        <a href="#!" class="btn btn-sm btn-outline-danger"><i class="bi bi-trash3"></i></a>&nbsp;&nbsp;
                                        <a href="#!" class="btn btn-sm btn-outline-success"><i class="bi bi-pencil-square"></i></a>
                                    </div>
                                </div>
                            </div>
                            </div>
                        </div>
                        
                    </div>

                </div>
                </div>
            </div>
        </div>
    )
};


export default Announcements;