import * as React from 'react';
import FlatButton from 'material-ui/lib/flat-button';
import Checks from './checks/checks';
import {connect} from 'react-redux';
import {store} from '../../store/store';
import * as Action from '../../actions/actions';
import * as path from 'path';

const welcomeStyle = {
  backgroundImage: `url("${path.resolve(__dirname, '../../../', 'styles', 'coderoad.jpg')}")`,
  backgroundRepeat: 'no-repeat',
  height: '350px',
  marginTop: '0'
};

@connect(null, (dispatch) => {
  return {
    routeToTutorials: () => store.dispatch(Action.setRoute('tutorials'))
  };
})
class Welcome extends React.Component<{
  routeToTutorials?: any
}, {}> {
  render() {
    return <div  style={welcomeStyle}>
      <div class='cr-welcome'>
        <FlatButton label='Start' onTouchTap={this.props.routeToTutorials} style={{marginTop: '200px'}} />
      </div>
    </div>;
  }
}

export const Start = ({checks}) => (
  <section className='cr-start'>
    <div className='cr-start-header'>

    {checks.passed
      ? <Welcome  />
      : <Checks checks={checks}/>}

    </div>

  <br />
  <p className='version'>Beta</p>
</section>
);
