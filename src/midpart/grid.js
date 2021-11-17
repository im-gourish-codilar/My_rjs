import { PureComponent } from "react";
import './grid.css';
import images from "../files/photos";
class Grid extends PureComponent {
    render() {
        return (
            <div className="image-grids">

                <div class="first-image-grids">
                    <div className="col1">
                        <img src={images.Car1} alt="im" />
                    </div>
                    <div className="col2">
                        <img src={images.Car2} alt="im" />
                        <img src={images.Car3} alt="im" />
                    </div>
                    <div className="col3">
                        <img src={images.Car4} alt="im" />
                        <img src={images.Car5} alt="im" />
                    </div>
                </div>

                <div className="second-image-grids">
                    <img src={images.Car6} alt="im" />
                    <img src={images.Car7} alt="im" />
                    <img src={images.Car8} alt="im" />
                    <img src={images.Car9} alt="im" />
                </div>

                <div class="third-image-grids">
                    <div className="col1">
                        <img src={images.Car10} alt="im" />
                    </div>
                    <div className="col2">
                        <img src={images.Car11} alt="im" />
                        <img src={images.Car12} alt="im" />
                    </div>
                    <div className="col3">
                        <img src={images.Car13} alt="im" />
                        <img src={images.Car14} alt="im" />
                    </div>
                </div>

                <div className="more-view-grid-button">
                    <a href="">
                        Show More</a>
                </div>
            </div>
        );
    }
}
export default Grid;