
function StateOfComponent({ register, errors }) {
    return (
        <>
            <div className="input-note">
                <h3>Note</h3>
                <div className="container-note">
                    <input type="text" {...register("note", {
                        required: "This field cannot be left blank",
                        pattern: {
                            value: /^([^!@#$&%^()-_=+<>?;:'"{[}]\|.,`~*]|[a-zA-Z0-9 ])+$/g,
                            message: "Do not enter special characters"
                        }
                    })} placeholder="Add your new todo" />
                    {errors.note?.type === 'required' && <p>{errors.note.message}</p>}
                    {errors.note?.type === 'pattern' && <p>{errors.note.message}</p>}
                </div>
            </div>
            <h3>Ngày</h3>
            <div className="input-date">
                <input type="date" {...register("date", { required: "Please select date month year !" })}></input>
                {errors.date?.type === 'required' && <p>{errors.date.message}</p>}
            </div>
            <div className="form-radio">
                <h3>Độ ưu tiên</h3>
                <div>
                    <label className="radio-custom">Low
                        <input type="radio" {...register("priority", { required: "Please choose the order of priority !" })} value="3" />
                        <span className="checkmark"></span>
                    </label>
                </div>
                <div>
                    <label className="radio-custom">Normal
                        <input type="radio" {...register("priority", { required: "Please choose the order of priority !" })} value="2" />
                        <span className="checkmark"></span>
                    </label>
                </div>
                <div>
                    <label className="radio-custom">High
                        <input type="radio" {...register("priority", { required: "Please choose the order of priority !" })} value="1" />
                        <span className="checkmark"></span>
                    </label>
                </div>
                {errors.priority?.type === 'required' && <p>{errors.priority.message}</p>}
            </div>
            <div className="form-checkbox">
                <h3>Công việc đề xuất</h3>
                <div className="container-checkbox">
                    <div>
                        <label className="custom-checkbox-label">Lau nhà
                            <input type="checkbox" {...register("todo")} value="1" />
                            <span className="checkmark"></span>
                        </label>
                    </div>
                    <div>
                        <label className="custom-checkbox-label">Xem phim
                            <input type="checkbox" {...register("todo")} value="2" />
                            <span className="checkmark"></span>
                        </label>
                    </div>
                    <div>
                        <label className="custom-checkbox-label">Đi chơi
                            <input type="checkbox" {...register("todo")} value="3" />
                            <span className="checkmark"></span>
                        </label>
                    </div>
                    <div>
                        <label className="custom-checkbox-label">Đi ăn
                            <input type="checkbox" {...register("todo")} value="4" />
                            <span className="checkmark"></span>
                        </label>
                    </div>
                    <div>
                        <label className="custom-checkbox-label">Đi ngủ
                            <input type="checkbox" {...register("todo")} value="5" />
                            <span className="checkmark"></span>
                        </label>
                    </div>
                    <div>
                        <label className="custom-checkbox-label">Đi làm
                            <input type="checkbox" {...register("todo")} value="6" />
                            <span className="checkmark"></span>
                        </label>
                    </div>
                </div>
                {errors.todo?.type === 'required' && <p>{errors.todo.message}</p>}
            </div>
            <div className="status">
                <h3>Trạng thái</h3>
                <div>
                    <label className="custom-checkbox-label">Hoàn thành
                        <input type="checkbox" {...register("complete")} ></input>
                        <span className="checkmark"></span>
                    </label>
                </div>
            </div>
        </>
    )
}

export default StateOfComponent;