function getName(name) {
    alert(name);
}
var Chung = React.createClass({
    layThongTin: function(){
        alert(this.props.children);
    },
    getInitialState() {
        return{
            tongHocVien: parseInt(this.props.tongHocVien)
        };        
    },
    addStudent(){
        this.state.tongHocVien = this.state.tongHocVien + 1;
        this.setState(this.state);
    },
    render: function() {
        return (
            <div>
                <h1 className="mauvang">{this.props.ten} - {this.props.giangvien}</h1>
                <div>So hoc vien: {this.state.tongHocVien}</div>
                <p>{this.props.children}</p>
                <button onClick={() => {getName(this.props.ten)}}>Thong tin</button>
                <button onClick={this.addStudent}>Them hoc vien</button>
                <KhoaHoc />
            </div>
        );
    }
});

var KhoaHoc = React.createClass({
    render: function() {
        return (
            <h3>Lap trinh ReactJS</h3>
        );
    }
});

var InputTag = React.createClass({
    render: function() {
        return (
            <div>
                <select ref="sl">
                    <option value="a">AAA</option>
                    <option value="b">BBB</option>
                    <option value="c">CCC</option>
                </select>
              <input type="text" ref="txt" />
              <button onClick={this.show}>Hien thi</button>  
            </div>
        );
    },
    show: function() {
        //var text = this.refs.txt.value;
        var text = this.refs.sl.value;
        alert(text);
    }
});

ReactDOM.render(
    <div>
        <InputTag></InputTag>
        <Chung ten="ReactJS" giangvien="Mr.Khoa" tongHocVien="10"> Khoa hoc React </Chung>
        <Chung ten="NodeJS" giangvien="Mr.Pho" tongHocVien="20"> Khoa hoc NodeJS </Chung>
    </div>,    
    document.getElementById("root")
);