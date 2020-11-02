import { Component } from "react";
import './NoResults.css';


class NoResults extends Component{
    render(){
        return(
            <div className="noResultsContainer">
                <div className="noResults2Container">
                    <div className="noResultsIconContainer">
                        <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 80 80">
                            <g fill="none" fillRule="evenodd">
                                <path stroke="#484848" strokeLinecap="round" d="M 37.891 50.705 c 4.584 -1.85 8.61 -5.256 11.216 -9.957 m 2.764 -9.071 c 0.456 -5.499 -1.142 -10.977 -4.48 -15.29 a 21.276 21.276 0 0 0 -6.53 -5.599 c -5.845 -3.24 -12.566 -3.444 -18.403 -1.139 c -4.65 1.836 -8.739 5.265 -11.375 10.022 a 22.488 22.488 0 0 0 -2.832 10.308 a 22.102 22.102 0 0 0 3.058 11.86 a 21.288 21.288 0 0 0 8.02 7.79 a 21.275 21.275 0 0 0 8.427 2.594 a 21.853 21.853 0 0 0 10.135 -1.518"></path>
                                <path stroke="#484848" strokeLinecap="round" d="M 28.774 45.86 a 16.046 16.046 0 0 1 -9.688 -4.642 m -3.693 -5.7 c -1.4 -3.695 -1.38 -7.782 0.065 -11.41 a 15.238 15.238 0 0 1 3.392 -5.144 c 3.384 -3.384 7.97 -4.852 12.444 -4.417 c 3.564 0.346 7.056 1.9 9.81 4.654 c 1.9 1.9 3.23 4.153 3.984 6.538 a 15.83 15.83 0 0 1 0.236 8.768 a 15.246 15.246 0 0 1 -3.984 6.947 a 15.237 15.237 0 0 1 -5.289 3.449 a 15.651 15.651 0 0 1 -7.277 0.956"></path>
                                <g fill="#484848" fillRule="nonzero">
                                    <path d="M 35.644 35.95 l -12 -12 l 0.572 -0.572 l 12 12 Z"></path>
                                    <path d="M 36.215 23.95 l -12 12 l -0.57 -0.572 l 11.999 -12 Z"></path>
                                </g>
                                <path stroke="#484848" strokeLinecap="square" d="M 52.267 52.61 l -6.646 -6.647"></path>
                                <path fill="#FFDB15" d="M 61.601 54.585 l -2.823 -2.824 c -1.405 -1.405 -3.988 -1.099 -5.768 0.682 c -1.78 1.78 -2.087 4.363 -0.682 5.768 l 9.599 9.599 l 8.89 8.89 c 1.403 1.404 3.987 1.098 5.767 -0.682 c 1.78 -1.78 2.086 -4.364 0.683 -5.768"></path>
                                <path stroke="#484848" strokeLinecap="round" d="M 52.095 58.273 c -1.404 -1.405 -1.283 -3.803 0.27 -5.356 s 3.951 -1.674 5.356 -0.27 l 9.6 9.6 l 8.89 8.89"></path>
                            </g>
                        </svg>
                    </div>

                    <div className="noResultsInfoContainer">
                        <h3 className="noResultsTitle">No hay resultados para tu busqueda "<strong>{this.props.searchKey}</strong>"</h3>
                        <p className="noResultsCheck">Revisá que hayas escrito bien <strong>lo que buscas</strong></p>
                    </div>
                </div>
                

                
            </div>
        );
    }
}

//this.props.searchKey

export default NoResults;