import express from "express"
import { sql } from "../db/setupDB.js"

export const addUnit = async (req, res) => {
  try {
    const {name, movement, toughness, save, wounds, leadership, OC} = req.body

    if (!name || !movement || !toughness || !save || !wounds || !leadership || !OC) {
      return res.status(400).json({success: false, message: "Missing data!"})
    }

    
    const profile = await sql.query(`INSERT INTO simple_profile (name, movement, toughness, save, wounds, leadership, OC)
    VALUES ($1, $2, $3, $4, $5, $6, $7)`, [name, movement, toughness, save, wounds, leadership, OC])

    return res.status(201).json({success: true, data: profile[0]})

  } catch (error) {
    console.log(error);
    return res.status(404).json({success: false, message:"Error caught in AddUnit, " + error})
    
  }
}

export const getAllUnits = async (req, res) => {
  try {
    const units = await sql`SELECT * FROM simple_profile`
    return res.status(200).json({success: true, data: units})

  } catch (error) {
    console.log(error);
    return res.status(404).json({success: false, message:"Error caught in getAllUnits, " + error})
  }
}

export const getUnit = async (req, res) => {
  try {
    const {id} = req.params;

    return res.status(200).json({data: id})

  } catch (error) {
    console.log(error);
    return res.status(404).json({success: false, message:"Error caught in getUnit, " + error})
  }

}

export const updateUnit = async (req, res) => {
  try {

  } catch (error) {
    console.log(error);
    return res.status(404).json({success: false, message:"Error caught in update, " + error})
  }


  res.send("test API")

}

export const deleteUnit = async (req, res) => {
  try {
    
  } catch (error) {
    console.log(error);
    return res.status(404).json({success: false, message:"Error caught in delete, " + error})
  }




  res.send("test API")

}

