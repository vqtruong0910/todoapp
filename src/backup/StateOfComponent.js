function StateOfComponent({ inputNote, inputDate, inputPriority, inputTodo, stateComplete, handleChangeInput, handleChangeDate, handleChangePriority, handleChangeCheckBox, handleChangeComplete }) {
    return (
        <>
            <div>
                <input type="text" value={inputNote} placeholder="Add your new todo" onChange={handleChangeInput} />
            </div>
            <h3>Ngày</h3>
            <div>
                <input type="date" value={inputDate} onChange={handleChangeDate}></input>
            </div>
            <div>
                <h3>Độ ưu tiên</h3>
                <div>
                    <label>
                        <input type="radio" name="priority" value="3" onChange={handleChangePriority} checked={inputPriority === "3"} />
                        Low
                    </label>
                </div>
                <div>
                    <label>
                        <input type="radio" name="priority" value="2" onChange={handleChangePriority} checked={inputPriority === "2"} />
                        Normal
                    </label>
                </div>
                <div>
                    <label>
                        <input type="radio" name="priority" value="1" onChange={handleChangePriority} checked={inputPriority === "1"} />
                        High
                    </label>
                </div>
            </div>
            <div>
                <h3>Việc cần thực hiện</h3>
                <div>
                    <label>
                        <input type="checkbox" value="1" checked={inputTodo.indexOf("1") !== -1} onChange={handleChangeCheckBox} />
                        Lau nhà
                    </label>
                </div>
                <div>
                    <label>
                        <input type="checkbox" value="2" checked={inputTodo.indexOf("2") !== -1} onChange={handleChangeCheckBox} />
                        Xem phim
                    </label>
                </div>
                <div>
                    <label>
                        <input type="checkbox" value="3" checked={inputTodo.indexOf("3") !== -1} onChange={handleChangeCheckBox} />
                        Đi qua nhà ny
                    </label>
                </div>
                <div>
                    <label>
                        <input type="checkbox" value="4" checked={inputTodo.indexOf("4") !== -1} onChange={handleChangeCheckBox} />
                        Đi ăn
                    </label>
                </div>
                <div>
                    <label>
                        <input type="checkbox" value="5" checked={inputTodo.indexOf("5") !== -1} onChange={handleChangeCheckBox} />
                        Đi ngủ
                    </label>
                </div>
                <div>
                    <label>
                        <input type="checkbox" value="6" checked={inputTodo.indexOf("6") !== -1} onChange={handleChangeCheckBox} />
                        Đi làm
                    </label>
                </div>
            </div>
            <div>
                <h3>Trạng thái</h3>
                <div>
                    <label>
                        <input type="checkbox" checked={stateComplete} onChange={handleChangeComplete}></input>
                        Hoàn thành
                    </label>
                </div>
            </div>
        </>
    )
}

export default StateOfComponent;