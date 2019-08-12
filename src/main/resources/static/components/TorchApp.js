class TorchApp extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			windowWidth: 0, 
			windowHeight: 0
		};
	}
	
	componentDidMount = () => {
		this.updateWindowDimensions();
		window.addEventListener("resize", this.updateWindowDimensions);
	}

	componentWillUnmount= () => {
		window.removeEventListener("resize", this.updateWindowDimensions);
	}

	updateWindowDimensions = () => {
		this.setState({windowWidth: window.innerWidth, windowHeight: window.innerHeight});
	}
	
	render() {
		const style = {
			position: "absolute",
			margin: "auto",
			top: 0,
		    right: 0,
		    bottom: 0,
		    left: 0,
			width: "1200px",
			height: "900px"
		};
		
		return (
			<div style={style}>
				<svg viewBox={`0 0 1200 900`}>
					<line x1="100" y1="450" x2="300" y2="300" stroke="#808080" fill="none" strokeWidth="2"/>
					<line x1="100" y1="450" x2="300" y2="600" stroke="#808080" fill="none" strokeWidth="2"/>
						
					<line x1="300" y1="300" x2="500" y2="200" stroke="#808080" fill="none" strokeWidth="2"/>
					<line x1="300" y1="300" x2="500" y2="250" stroke="#808080" fill="none" strokeWidth="2"/>
					<line x1="300" y1="300" x2="500" y2="300" stroke="#808080" fill="none" strokeWidth="2"/>
					<line x1="300" y1="300" x2="500" y2="350" stroke="#808080" fill="none" strokeWidth="2"/>
					<line x1="300" y1="300" x2="500" y2="400" stroke="#808080" fill="none" strokeWidth="2"/>
					<line x1="300" y1="600" x2="500" y2="550" stroke="#808080" fill="none" strokeWidth="2"/>
					<line x1="300" y1="600" x2="500" y2="650" stroke="#808080" fill="none" strokeWidth="2"/>
						
					<line x1="500" y1="200" x2="700" y2="450" stroke="#808080" fill="none" strokeWidth="2"/>
					<line x1="500" y1="250" x2="700" y2="450" stroke="#808080" fill="none" strokeWidth="2"/>
					<line x1="500" y1="300" x2="700" y2="450" stroke="#808080" fill="none" strokeWidth="2"/>
					<line x1="500" y1="350" x2="700" y2="450" stroke="#808080" fill="none" strokeWidth="2"/>
					<line x1="500" y1="400" x2="700" y2="450" stroke="#808080" fill="none" strokeWidth="2"/>
					<line x1="500" y1="550" x2="700" y2="450" stroke="#808080" fill="none" strokeWidth="2"/>
					<line x1="500" y1="650" x2="700" y2="450" stroke="#808080" fill="none" strokeWidth="2"/>
						
					<line x1="700" y1="450" x2="900" y2="300" stroke="#808080" fill="none" strokeWidth="2"/>
					<line x1="700" y1="450" x2="900" y2="600" stroke="#808080" fill="none" strokeWidth="2"/>
						
					<line x1="900" y1="300" x2="1100" y2="250" stroke="#808080" fill="none" strokeWidth="2"/>
					<line x1="900" y1="300" x2="1100" y2="300" stroke="#808080" fill="none" strokeWidth="2"/>
					<line x1="900" y1="300" x2="1100" y2="350" stroke="#808080" fill="none" strokeWidth="2"/>
					<line x1="900" y1="600" x2="1100" y2="550" stroke="#808080" fill="none" strokeWidth="2"/>
					<line x1="900" y1="600" x2="1100" y2="600" stroke="#808080" fill="none" strokeWidth="2"/>
					<line x1="900" y1="600" x2="1100" y2="650" stroke="#808080" fill="none" strokeWidth="2"/>
					
					<circle cx="100" cy="450" r="20" stroke="#808080" fill="#2ecc71" strokeWidth="2" style={{animation: "pulse 2s ease infinite"}}/>
					
					<circle className="node" cx="300" cy="300" r="20" stroke="#808080" fill="#2ecc71" strokeWidth="2"/>
					<circle className="node" cx="300" cy="600" r="20" stroke="#808080" fill="#e74c3c" strokeWidth="2"/>
					
					<circle className="node" cx="500" cy="200" r="20" stroke="#808080" fill="#bcbcbc" strokeWidth="2"/>
					<circle className="node" cx="500" cy="250" r="20" stroke="#808080" fill="#bcbcbc" strokeWidth="2"/>
					<circle className="node" cx="500" cy="300" r="20" stroke="#808080" fill="#bcbcbc" strokeWidth="2"/>
					<circle className="node" cx="500" cy="350" r="20" stroke="#808080" fill="#bcbcbc" strokeWidth="2"/>
					<circle className="node" cx="500" cy="400" r="20" stroke="#808080" fill="#bcbcbc" strokeWidth="2"/>						
					<circle className="node" cx="500" cy="550" r="20" stroke="#808080" fill="#3498db" strokeWidth="2"/>
					<circle className="node" cx="500" cy="650" r="20" stroke="#808080" fill="#3498db" strokeWidth="2"/>
						
					<circle className="node" cx="700" cy="450" r="20" stroke="#808080" fill="#f1c40f" strokeWidth="2"/>
						
					<circle className="node" cx="900" cy="300" r="20" stroke="#808080" fill="#bcbcbc" strokeWidth="2"/>
					<circle className="node" cx="900" cy="600" r="20" stroke="#808080" fill="#bcbcbc" strokeWidth="2"/>
					
					<circle className="node" cx="1100" cy="250" r="20" stroke="#808080" fill="#bcbcbc" strokeWidth="2"/>
					<circle className="node" cx="1100" cy="300" r="20" stroke="#808080" fill="#bcbcbc" strokeWidth="2"/>
					<circle className="node" cx="1100" cy="350" r="20" stroke="#808080" fill="#bcbcbc" strokeWidth="2"/>
					<circle className="node" cx="1100" cy="550" r="20" stroke="#808080" fill="#bcbcbc" strokeWidth="2"/>
					<circle className="node" cx="1100" cy="600" r="20" stroke="#808080" fill="#bcbcbc" strokeWidth="2"/>
					<circle className="node" cx="1100" cy="650" r="20" stroke="#808080" fill="#bcbcbc" strokeWidth="2"/>
				</svg>
			</div>
		);
	}
}