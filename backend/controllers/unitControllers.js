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
    const units = await sql.query(`SELECT * FROM simple_profile`)
    return res.status(200).json({success: true, data: units})

  } catch (error) {
    console.log(error);
    return res.status(404).json({success: false, message:"Error caught in getAllUnits, " + error})
  }
}

export const getUnit = async (req, res) => {
  try {
    const {id} = req.params;

    const unit = await sql.query(`SELECT * FROM simple_profile WHERE id = ($1)`, [id])

    return res.status(200).json({success: true, data: unit})

  } catch (error) {
    console.log(error);
    return res.status(404).json({success: false, message:"Error caught in getUnit, " + error})
  }

}

export const updateUnit = async (req, res) => {
  try {
    const {id} = req.params
    const {name, movement, toughness, save, wounds, leadership, OC} = req.body

    if (!name || !movement || !toughness || !save || !wounds || !leadership || !OC) {
      return res.status(400).json({success: false, message: "Missing data!"})
    }

    const unit = await sql.query(`UPDATE simple_profile 
      SET name = $1, movement = $2, toughness = $3, save = $4, wounds = $5, leadership = $6, OC = $7 
      WHERE id = $8`, [name, movement, toughness, save, wounds, leadership, OC, id])

      return res.status(200).json({success: true, data: unit})

  } catch (error) {
    console.log(error);
    return res.status(404).json({success: false, message:"Error caught in update, " + error})
  }
}

export const deleteUnit = async (req, res) => {
  try {
    const {id} = req.params

    const deleted = await sql.query(`DELETE FROM simple_profile WHERE id = $1`, [id])

    return res.status(200).json({success: true, data: deleted})
  } catch (error) {
    console.log(error);
    return res.status(404).json({success: false, message:"Error caught in delete, " + error})
  }
}

