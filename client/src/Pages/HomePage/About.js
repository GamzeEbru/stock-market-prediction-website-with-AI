import React, { Component } from "react";
import Chart from "react-apexcharts";

class About extends Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [
        {
          name: "High - 2013",
          data: [28, 29, 33, 36, 32, 32, 33],
        },
        {
          name: "Low - 2013", //günün en düşük değeri yazılcak
          data: [12, 11, 14, 18, 17, 13, 13],
        },
      ],
      options: {
        chart: {
          height: 350,
          type: "line",
          dropShadow: {
            enabled: true,
            color: "#000",
            top: 18,
            left: 7,
            blur: 10,
            opacity: 0.2,
          },
          toolbar: {
            show: false,
          },
        },
        colors: ["#77B6EA", "#545454"],
        dataLabels: {
          enabled: true,
        },
        stroke: {
          curve: "smooth",
        },
        title: {
          text: "Average High & Low Temperature",
          align: "left",
        },
        grid: {
          borderColor: "#e7e7e7",
          row: {
            colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
            opacity: 0.5,
          },
        },
        markers: {
          size: 1,
        },
        xaxis: {
          categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
          title: {
            text: "Month",
          },
        },
        yaxis: {
          title: {
            text: "Temperature",
          },
          min: 5,
          max: 40,
        },
        legend: {
          position: "top",
          horizontalAlign: "right",
          floating: true,
          offsetY: -25,
          offsetX: -5,
        },
      },
    };
  }
  /*makeRemoteRequest = () => {
    const { page, seed } = this.state;
    const url = "https://api.genelpara.com/embed/doviz.json";
    fetch(url)
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          data: page === 1 ? res.results : [...this.state.data, ...res.results],
          error: res.error || null,
        });
      })
      .catch((error) => {
        this.setState({ error });
      });
  };*/

  render() {
    return (
      <div name="about" className="w-full my-24">
        <div className="max-w-[1240px] mx-auto">
          <div className="grid md:grid-cols-2 gap-1 text-center">
            <div className="border py-8 rounded-xl shadow-xl">
              <p className="text-5xl font-bold text-indigo-600">3.878,98</p>
              {/* apı ile güncel bıst verileri çekilecek */}
              <p className="text-gray-500 text-2xl mt-5 font-bold ">BIST 100</p>
              <div className="pl-14 ">
                <div className="  ">
                  {/*makul ismi dinamik gelcek */}
                  <div className="app mt-12 ml-8">
                    <div className="row">
                      <div className="mixed-chart">
                        <Chart
                          options={this.state.options}
                          series={this.state.series}
                          type="line"
                          width="400"
                          height={300}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="border py-8 rounded-xl shadow-xl">
              <p className="text-5xl font-bold text-indigo-600">18,5805</p>
              {/* apı ile güncel dolar verileri çekilecek */}
              <p className="text-gray-500 text-2xl mt-6 font-bold ">Dolar</p>
              <div className="pl-14">
                <div className="  ">
                  {/*makul ismi dinamik gelcek */}
                  <div className="app mt-12 ml-8">
                    <div className="row">
                      <div className="mixed-chart">
                        <Chart
                          options={this.state.options}
                          series={this.state.series}
                          type="line"
                          width="400"
                          height={300}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="border py-8 rounded-xl shadow-xl">
              <p className="text-5xl font-bold text-indigo-600">993,156</p>
              {/* apı ile güncel gram altın verileri çekilecek */}
              <p className="text-gray-500 text-2xl mt-6 font-bold">Euro</p>
              <div className="pl-14">
                <div className="  ">
                  {/*makul ismi dinamik gelcek */}
                  <div className="app mt-12 ml-8">
                    <div className="row">
                      <div className="mixed-chart">
                        <Chart
                          options={this.state.options}
                          series={this.state.series}
                          type="line"
                          width="400"
                          height={300}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="border py-8 rounded-xl shadow-xl">
              <p className="text-5xl font-bold text-indigo-600">18,5366</p>
              {/* apı ile güncel gram altın verileri çekilecek */}
              <p className="text-gray-500 text-2xl  font-bold mt-6">
                Gram Altın
              </p>
              <div className="pl-14">
                <div className="  ">
                  {/*makul ismi dinamik gelcek */}
                  <div className="app mt-12 ml-8">
                    <div className="row">
                      <div className="mixed-chart">
                        <Chart
                          options={this.state.options}
                          series={this.state.series}
                          type="line"
                          width="400"
                          height={300}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default About;
