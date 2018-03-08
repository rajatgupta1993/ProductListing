import React from 'react';
import HomeContainer from './containers/HomeContainer';
import { Route, BrowserRouter, Link, Switch, Redirect } from 'react-router-dom';
import LoaderContainer from './containers/LoaderContainer';

class AppComponent extends React.Component {

    render() {

        return (          
            <BrowserRouter >
            <div>
                <div >
                   <LoaderContainer/>
                </div>
                <div>
                    <Switch>
                        <Route path="/home" component={HomeContainer} />
                        <Redirect from="/" to="/home" />
                    </Switch>
                </div>
            </div>
            </BrowserRouter>            
        );
    }
}

export default AppComponent;
