\c herbs_dev

INSERT INTO herbs (
    name, entry_date, pic, nutrients, astrology_sign, chakra, element, tea, poisonous, stock
) VALUES 
('Basil', '2020-06-12', 'https://horticulture.co.uk/wp-content/uploads/2021/11/5-14.jpg', 'Vitamins C, Calcium, Iron, Vitamin D, Magnesium', 'Pisces, Aries', 'Solar Plexus', 'Fire', true, false, 10);
-- ,
-- ('Bay Leaf', '2023-01-01', 'https://horticulture.co.uk/wp-content/uploads/2021/11/6-9.jpg', 'Vitamins A, C, Calcium, Iron', 'Taurus', 'Solar Plexus', 'Fire', true, false, 10),
-- ('Borage', '2023-01-02', 'https://horticulture.co.uk/wp-content/uploads/2021/11/7-9.jpg', 'Vitamins C, Calcium, Iron', 'Gemini', 'Heart', 'Water', false, false, 15),
-- ('Calendula', '2023-01-03', 'https://horticulture.co.uk/wp-content/uploads/2021/11/8-9.jpg', 'Vitamins A, C, Calcium', 'Leo', 'Sacral', 'Earth', true, false, 20),
-- ('Caraway', '2023-01-04', 'https://horticulture.co.uk/wp-content/uploads/2021/11/9-9.jpg', 'Vitamins C, Calcium, Iron', 'Virgo', 'Root', 'Earth', false, false, 25),
-- ('Chamomile', '2023-01-05', 'https://horticulture.co.uk/wp-content/uploads/2021/11/10-4.jpg', 'Vitamins A, C, Calcium', 'Libra', 'Heart', 'Water', true, false, 30),
-- ('Chervil', '2023-01-06', 'https://horticulture.co.uk/wp-content/uploads/2021/11/11-2.jpg', 'Vitamins A, C, Calcium', 'Scorpio', 'Solar Plexus', 'Air', false, false, 35),
-- ('Chives', '2023-01-07', 'https://horticulture.co.uk/wp-content/uploads/2021/11/12-1.jpg', 'Vitamins A, C, Iron', 'Sagittarius', 'Throat', 'Fire', true, false, 40),
-- ('Comfrey', '2023-01-08', 'https://horticulture.co.uk/wp-content/uploads/2021/11/13-1.jpg', 'Vitamins C, Calcium, Iron', 'Capricorn', 'Root', 'Earth', false, true, 5),
-- ('Coriander', '2023-01-09', 'https://horticulture.co.uk/wp-content/uploads/2021/11/14-1.jpg', 'Vitamins C, Iron, Calcium', 'Aquarius', 'Sacral', 'Water', true, false, 50),
-- ('Dill', '2023-01-10', 'https://horticulture.co.uk/wp-content/uploads/2021/11/15-1.jpg', 'Vitamins A, C, Calcium', 'Pisces', 'Heart', 'Fire', false, false, 55),
-- ('Elderflower', '2023-01-11', 'https://horticulture.co.uk/wp-content/uploads/2021/11/16-1.jpg', 'Vitamins A, C, Calcium', 'Aries', 'Throat', 'Air', true, false, 60),
-- ('Fennel', '2023-01-12', 'https://horticulture.co.uk/wp-content/uploads/2021/11/17-1.jpg', 'Vitamins A, C, Iron', 'Taurus', 'Solar Plexus', 'Earth', false, false, 65),
-- ('Fenugreek', '2023-01-13', 'https://horticulture.co.uk/wp-content/uploads/2021/11/18-1.jpg', 'Vitamins C, Calcium, Iron', 'Gemini', 'Root', 'Fire', true, false, 70),
-- ('Garlic', '2023-01-14', 'https://horticulture.co.uk/wp-content/uploads/2021/11/19-1.jpg', 'Vitamins C, Calcium, Iron', 'Cancer', 'Heart', 'Earth', true, false, 75),
-- ('Ginger', '2023-01-15', 'https://horticulture.co.uk/wp-content/uploads/2021/11/20-1.jpg', 'Vitamins C, Iron, Magnesium', 'Leo', 'Solar Plexus', 'Fire', true, false, 80),
-- ('Ginkgo', '2023-01-16', 'https://horticulture.co.uk/wp-content/uploads/2021/11/21-1.jpg', 'Vitamins C, Calcium, Iron', 'Virgo', 'Third Eye', 'Air', false, false, 85),
-- ('Ginseng', '2023-01-17', 'https://horticulture.co.uk/wp-content/uploads/2021/11/22-1.jpg', 'Vitamins A, C, Iron', 'Libra', 'Root', 'Earth', true, false, 90),
-- ('Horseradish', '2023-01-18', 'https://horticulture.co.uk/wp-content/uploads/2021/11/23-1.jpg', 'Vitamins C, Calcium, Iron', 'Scorpio', 'Solar Plexus', 'Fire', false, false, 95),
-- ('Lemongrass', '2023-01-19', 'https://horticulture.co.uk/wp-content/uploads/2021/11/24-1.jpg', 'Vitamins A, C, Calcium', 'Sagittarius', 'Heart', 'Air', true, false, 100),
-- ('Linseed', '2023-01-20', 'https://horticulture.co.uk/wp-content/uploads/2021/11/25.jpg', 'Vitamins C, Iron, Magnesium', 'Capricorn', 'Root', 'Earth', false, false, 105),
-- ('Lovage', '2023-01-21', 'https://horticulture.co.uk/wp-content/uploads/2021/11/26.jpg', 'Vitamins A, C, Calcium', 'Aquarius', 'Sacral', 'Water', true, false, 110),
-- ('Lungwort', '2023-01-22', 'https://horticulture.co.uk/wp-content/uploads/2021/11/27.jpg', 'Vitamins C, Calcium, Iron', 'Pisces', 'Heart', 'Earth', false, false, 115),
-- ('Marjoram', '2023-01-23', 'https://horticulture.co.uk/wp-content/uploads/2021/11/28.jpg', 'Vitamins A, C, Calcium', 'Aries', 'Throat', 'Fire', true, false, 120),
-- ('Oregano', '2023-01-24', 'https://horticulture.co.uk/wp-content/uploads/2021/11/29.jpg', 'Vitamins C, Calcium, Iron', 'Taurus', 'Solar Plexus', 'Fire', true, false, 125),
-- ('Parsley', '2023-01-25', 'https://horticulture.co.uk/wp-content/uploads/2021/11/30.jpg', 'Vitamins A, C, Iron', 'Gemini', 'Heart', 'Air', false, false, 130);