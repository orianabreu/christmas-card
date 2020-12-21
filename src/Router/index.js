import { BrowserRouter, Route } from "react-router-dom";
import Home from '../pages/Home';

export default function CustomRouter() {
    return (
        <BrowserRouter>
            <Route exact path='/:id' component={Home} />
            <Route component={Home} />
        </BrowserRouter>
    )
}