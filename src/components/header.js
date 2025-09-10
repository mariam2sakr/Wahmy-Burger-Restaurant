import React, { useState, useEffect } from "react";
import "./header.css";

// branches of wahmy burger
const branches = [
  { name: "دمياط الجديدة", lat: 31.44601552418856, lng: 31.670859895824226 },
  { name: "شيراتون", lat: 30.110162067187627, lng: 31.37651492275352 },
  { name: "٦ أكتوبر", lat: 30.066141300176138, lng: 31.207448874367934 },
  { name: "الشيخ زايد", lat: 30.026934998242968, lng: 30.96720986692822 },
  { name: "وسط البلد", lat: 30.050611595858385, lng: 31.240785380422253 },
];

function Header({ cart, setShowCart }) {
  const [selectedBranch, setSelectedBranch] = useState("");

  useEffect(() => {
    const savedBranch = localStorage.getItem("userBranch");
    if (savedBranch) {
      setSelectedBranch(savedBranch);
    }
  }, []);

  // nearest location
  const findNearestBranch = (userLat, userLng) => {
    let nearest = null;
    let minDistance = Infinity;

    branches.forEach((branch) => {
      const distance = Math.sqrt(
        Math.pow(userLat - branch.lat, 2) + Math.pow(userLng - branch.lng, 2)
      );
      if (distance < minDistance) {
        minDistance = distance;
        nearest = branch;
      }
    });
    return nearest;
  };

  // when click on icon
  const handleLocationClick = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const userLat = position.coords.latitude;
          const userLng = position.coords.longitude;

          const nearestBranch = findNearestBranch(userLat, userLng);

          if (nearestBranch) {
            setSelectedBranch(nearestBranch.name);
            localStorage.setItem("userBranch", nearestBranch.name);
            alert(`أقرب فرع ليك هو: ${nearestBranch.name}`);
          }
        },
        (error) => {
          alert("تعذر الحصول على موقعك: " + error.message);
        }
      );
    } else {
      alert("المتصفح لا يدعم تحديد الموقع");
    }
  };

  // change manually
  const handleBranchChange = (e) => {
    const branch = e.target.value;
    setSelectedBranch(branch);
    localStorage.setItem("userBranch", branch);
  };

  return (
    <div className="header">
      <div className="header-left">
        <img src="/images/logo-header.png" className="logo" alt="logo" />
        <span className="h-header">WAHMY</span>
      </div>

      <div className="header-right">
        {/* Dropdown*/}
        <select
          value={selectedBranch || ""}
          onChange={handleBranchChange}
          style={{ marginRight: "15px", padding: "5px" }}
        >
          <option value="">اختر فرع</option>
          {branches.map((branch, index) => (
            <option key={index} value={branch.name}>
              {branch.name}
            </option>
          ))}
        </select>

        {/* location icon*/}
        <i
          className="fa-solid fa-location-dot"
          style={{ cursor: "pointer", fontSize: "20px", marginRight: "15px" }}
          onClick={handleLocationClick}
        ></i>

        <div className="View" onClick={() => setShowCart((prev) => !prev)}>
          <i className="fa-solid fa-cart-plus"></i>
          <span>View Order ({cart.length})</span>
        </div>
      </div>
    </div>
  );
}

export default Header;