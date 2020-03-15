import React, {Component} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

export default class Footer extends Component {

    render() {
        return (
            <div>
                <footer class="footer">
                    <div class="container">
                        <span class="text-muted">
                            <p class="madein">Made in Codecool</p><p class="copyright">Copyright © [2020]</p>
                        </span>
                    </div>
                </footer>
            </div>

        );
    }

}
