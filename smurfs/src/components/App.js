import React from "react";
import "./App.css";
import { SmurfList } from "./smurfList";
import { connect} from 'react-redux';
import { addNewSmurf} from './Actions/actions';




const App = (props) => {
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>

        {props.isFetching ? (
          <SmurfList smurfs={props.smurfs} addNewSmurf={props.addNewSmurf} />):
          (<button type='button'
          onClick={() => props.getData()}>Hello New Smurf</button>
          )
        }
      </div>
    );
}

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs,
    isFetching: state.isFetching
  }
}
export default connect (mapStateToProps,{}) (App);
