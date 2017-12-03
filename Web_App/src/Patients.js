import React, { Component } from 'react';













class Patients extends Component {
  render() {
    return (
      <div className="App">
        <div class="container-fluid">
            
            <div class="row">
                <div class="col-lg-2 component" id="personal-infos">
                    <img src="/elyes.jpg" width="100%" class="img-circle" alt="" /><br />
                    <br />
                    <p>Name : <b>Elyes Manai</b></p>
                    <p>Age : <b>21</b></p>
                    <p>Ville : <b>Marsa</b></p>
                    <p>Blod type : <b>O+</b></p>
                    <p>Maladies : <b><ul><li>Diabète Type A</li></ul></b></p>
                    <p>Dossier Médical : <b>Oui</b></p>
                    <p>Last check-up <b>21/10/2017</b>:</p>
                    <p>allergies : <b>ghabra</b></p>
                    <p>Bitcoins : <b>90</b></p>
                    <p>Numéro de confiance : <b>92179978</b></p>
                </div>

                <div class="col-lg-9 col-lg-offset-1 component" id="charts">
                    <div class="row">
                          <div class="col-lg-4"><canvas id="chart-0"></canvas></div>
                           <div class="col-lg-4"><canvas id="chart-1"></canvas></div>
                           <div class="col-lg-4"><canvas id="chart-2"></canvas></div>
                           <div class="col-lg-4"><canvas id="chart-3"></canvas></div>

                    </div>
                </div>
            </div>

        </div>
      </div>
    );
  }
}

export default Patients;
