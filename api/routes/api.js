const express = require('express');
const router = express.Router();
const db = require('../db/crowdfunding_db');

router.get('/fundraisers', (req, res) => {
  db.query('SELECT a.*,b.`NAME`AS CATEGORY_NAME FROM FUNDRAISER a LEFT JOIN CATEGORY b ON a.CATEGORY_ID = b.CATEGORY_ID WHERE a.ACTIVE = 1', (err, results) => {
    if (err) return res.status(500).json(err);
    res.json(results);
  });
});

router.get('/categories', (req, res) => {
  db.query('SELECT * FROM CATEGORY', (err, results) => {
    if (err) return res.status(500).json(err);
    res.json(results);
  });
});


//
router.get('/fundraiser/:id', (req, res) => {
  const { id } = req.params;
  db.query('SELECT a.*,b.`NAME`AS CATEGORY_NAME FROM FUNDRAISER a LEFT JOIN CATEGORY b ON a.CATEGORY_ID = b.CATEGORY_ID WHERE a.ACTIVE = 1 AND a.FUNDRAISER_ID = ?', [id], (err, results) => {
    if (err) return res.status(500).json(err);
    res.json(results[0]);
  });
});

router.get("/search", async (req, res) => {
  const { organizer, city, category } = req.query;
  let sql = ''
  if (organizer) {
      sql +=  ` AND a.ORGANIZER LIKE '%${organizer}%'`
  }
  if (city) {
      sql += ` AND a.CITY LIKE '%${city}%'`
  }
  if (category) {
      sql += ` AND a.CATEGORY_ID = ${category}`
  }
  db.query(`SELECT a.*,b.NAME AS CATEGORY_NAME FROM FUNDRAISER a 
    LEFT JOIN CATEGORY b ON a.CATEGORY_ID = b.CATEGORY_ID WHERE 1=1 ` + sql, (err, results) => {
    if (err) return res.status(500).json(err);
    res.json(results);
  });
});


router.get("/fundraiser/:id/donations", async (req, res) => {
  const { id } = req.params;
  db.query('SELECT * FROM DONATION WHERE FUNDRAISER_ID = ?', [id], (err, results) => {
    if (err) return res.status(500).json(err);
    res.json(results);
  });
});

router.post("/fundraiser/donations", async (req, res) => {
  const { giver, amount, fundraiseId } = req.body;
  db.query('INSERT INTO DONATION(DATE, AMOUNT, GIVER, FUNDRAISER_ID) VALUES(?,?,?,?)', [new Date(), amount, giver, fundraiseId], (err, results) => {
    if (err) return res.status(500).json(err);
    res.json(results);
  });
});

router.post("/fundraiser", async (req, res) => {
  const { organizer, caption, targetFunding, currentFunding, city, active, categoryId } = req.body;
  db.query('INSERT INTO FUNDRAISER(ORGANIZER, CAPTION, TARGET_FUNDING, CURRENT_FUNDING, CITY, ACTIVE, CATEGORY_ID) VALUES(?,?,?,?,?,?,?)', [organizer, caption, targetFunding, currentFunding, city, active, categoryId], (err, results) => {
    if (err) return res.status(500).json(err);
    res.json(results);
  });
});

router.put("/fundraiser/:id", async (req, res) => {
  const { id } = req.params;
  const { organizer, caption, targetFunding, currentFunding, city, active, categoryId } = req.body;
  db.query('UPDATE FUNDRAISER SET ORGANIZER = ?, CAPTION = ?, TARGET_FUNDING = ?, CURRENT_FUNDING = ?, CITY = ?, ACTIVE = ?, CATEGORY_ID = ? WHERE FUNDRAISER_ID = ?', [organizer, caption, targetFunding, currentFunding, city, active, categoryId, id], (err, results) => {
    if (err) return res.status(500).json(err);
    res.json(results);
  });
});

router.delete("/fundraiser/:id", async (req, res) => {
  const { id } = req.params;
  db.query('DELETE FROM FUNDRAISER WHERE FUNDRAISER_ID = ?', [id], (err, results) => {
    if (err) return res.status(500).json(err);
    res.json(results);
  });
});

module.exports = router;
