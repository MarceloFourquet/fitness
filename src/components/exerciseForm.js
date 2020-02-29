import React from 'react';

const ExerciseForm = ({ onSubmit, onChange, form }) => (
    <React.Fragment>
        <div className="container">
            <div className="row mt-5">
                <div className="col">
                    <form onSubmit={onSubmit}>
                        <div className="form-group">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Title"
                                name="title"
                                onChange={onChange}
                                value={form.title}
                            >
                            </input>
                        </div>
                        <div className="form-group">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Description"
                                name="description"
                                onChange={onChange}
                                value={form.description}
                            >
                            </input>
                        </div>
                        <div className="form-group">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Img"
                                name="img"
                                onChange={onChange}
                                value={form.img}
                            >
                            </input>
                        </div>
                        <div className="form-row">
                            <div className="col">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="LeftColor"
                                    name="leftColor"
                                    onChange={onChange}
                                    value={form.leftColor}
                                >
                                </input>
                            </div>
                            <div className="col">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="RightColor"
                                    name="rightColor"
                                    onChange={onChange}
                                    value={form.rightColor}
                                >
                                </input>
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="col text-center mt-5 mb-5">
                                <button type="submit" className="btn btn-primary w-25">
                                    Submit
                                    </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </React.Fragment>
)

export default ExerciseForm;