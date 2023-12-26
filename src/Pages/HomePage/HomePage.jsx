import React  from "react";
import './home-page.scss'
import Header from '../../Components/Header/Header'
import AirConditions from '../../Components/AirConditions/AirConditions'
import Search from '../../Components/Search/Search'
import TodayForecast from '../../Components/TodayForecast/TodayForecast'
import WeekConditions from '../../Components/WeekConditions/WeekConditions'
import SideBar from '../../Components/SideBar/SideBar'
import CityTemperature from "../../Components/CityTemperature/CityTemperature";
import Favorites from "../../Components/Favorites/Favorites";
import { Row, Col } from "antd";

function HomePage() {
    return ( 
        <div id="HomePage">
        <Header></Header>
          
            <div className="container-fluid">
              <Row gutter={[16, 16]}>
                 <Col span={4}>
                   <SideBar></SideBar>
                 </Col>
                <Col span={14}>
                   <div className="Middle">
                     <Search></Search>
                     <CityTemperature></CityTemperature>
                     <Favorites></Favorites>
                     <TodayForecast></TodayForecast>
                     <AirConditions></AirConditions> 
                  </div>
               </Col>
               <Col span={6}>
                 <WeekConditions></WeekConditions>
               </Col>
          </Row>

            </div>

          </div>
        
     );
}
        
export default HomePage;
            
       
        
