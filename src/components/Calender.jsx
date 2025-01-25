import React from "react"

export default function Calender() {
  return <div className="calender">
    <div className="flex">
      <h2 className="month-year comfortaa">June, 2024</h2>

      <div className="change-month">
        <button className="prev"><i className="fa-solid fa-angle-left"></i></button>
        <button className="next"><i className="fa-solid fa-angle-right"></i></button>
      </div>
    </div>

    <div className="days">
      <span>SUN</span>
      <span>MON</span>
      <span>TUE</span>
      <span>WED</span>
      <span>THU</span>
      <span>FRI</span>
      <span>SAT</span>
    </div>

    <div className="dates">
      <span></span><span></span><span></span><span></span><span></span><span></span>
      <span>1</span><span>2</span><span>3</span><span>4</span><span>5</span><span>6</span><span>7</span><span>8</span><span>9</span><span>10</span><span>11</span><span>12</span><span>13</span><span>14</span><span>15</span><span>16</span><span className="current-day">17</span><span>18</span><span>19</span><span>20</span><span>21</span><span>22</span><span>23</span><span>24</span><span>25</span><span>26</span><span>27</span><span>28</span><span>29</span><span>30</span>
    </div>
  </div>
}
